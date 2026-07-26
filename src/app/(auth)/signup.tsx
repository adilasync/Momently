import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
export default function SignupScreen() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const[isLoading,setIsLoading] = useState(false)
    const router = useRouter();
    const{signUp} = useAuth()
    const handleSignUp = async ()=>{
        if(!email || password)Alert.alert("Error","Please fill up all the fields")
        if(password.length<3)Alert.alert("Error","password must be atleast 3 characters")
            setIsLoading(true)

        try {
            await signUp(email,password)
            router.push("/(auth)/onboarding")
        } catch (error) {
            Alert.alert("Error","Failed")
        }finally{
            setIsLoading(false)
        }
    }
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <View style={styles.container}>
        
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Sign up to get started</Text>
        </View>

        {/* Form Inputs & Buttons */}
        <View style={styles.formContainer}>
         
          <TextInput 
            style={styles.input}
            placeholder="Email"  
            placeholderTextColor="#999" 
            keyboardType="email-address" 
            autoComplete="email" 
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <TextInput 
            style={styles.input}
            placeholder="Password"  
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#999"  
            secureTextEntry
          />
       

          <TouchableOpacity style={styles.loginButton} activeOpacity={0.8} onPress={() => {handleSignUp}}>
           { isLoading? (<ActivityIndicator size={24} color="#fff"/>) : (<Text style={styles.loginButtonText}>Sign Up</Text>)}
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupButton} onPress={() => {router.push('./login')}}>
            <Text style={styles.signupText}>
              Already have an account? <Text style={styles.signupLink}>Log in</Text>
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    height: 52,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111827',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 16,
  },
  loginButton: {
    height: 52,
    backgroundColor: '#000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#050505',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupButton: {
    marginTop: 24,
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    color: '#101012',
  },
  signupLink: {
    color: '#000',
    fontWeight: '600',
  },
});