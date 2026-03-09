'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'
import { Brain, Lock, Mail, ArrowLeft, ArrowRight, Shield, Leaf } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields')
      return
    }

    setIsLoading(true)

    // Mock authentication
    setTimeout(() => {
      if (formData.email === 'admin@dnadesa.id' && formData.password === 'admin123') {
        toast.success('Login successful! Welcome back.')
        router.push('/dashboard')
      } else if (formData.email === 'demo@dnadesa.id' && formData.password === 'demo123') {
        toast.success('Login successful! Welcome to demo mode.')
        router.push('/dashboard')
      } else {
        toast.error('Invalid credentials. Try demo@dnadesa.id / demo123')
      }
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Back to Landing */}
        <Link href="/landing">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Logo & Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 mb-4">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold">DNA Desa AI Presisi</h1>
          <p className="text-muted-foreground">Government Official Portal</p>
        </div>

        {/* Login Card */}
        <Card className="border-2 shadow-xl">
          <CardHeader>
            <CardTitle>Secure Access</CardTitle>
            <CardDescription>Enter your government credentials to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Official Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.name@dnadesa.id"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <Link href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Forgot password?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <Card className="border-2 border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/20">
          <CardContent className="p-4">
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-600" />
              Demo Access
            </h3>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p><span className="font-medium">Email:</span> demo@dnadesa.id</p>
              <p><span className="font-medium">Password:</span> demo123</p>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <Card className="border-2 border-slate-200 dark:border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-slate-400 mt-0.5" />
              <div>
                <p className="text-sm font-semibold">Secure Government Portal</p>
                <p className="text-xs text-muted-foreground mt-1">
                  This system is for authorized government officials only. 
                  All access is logged and monitored.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sister App Link */}
        <Card className="border-2 border-slate-200 dark:border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Koperasi Merah Putih</p>
                  <p className="text-xs text-muted-foreground">Cooperative Management System</p>
                </div>
              </div>
              <Link href="http://localhost:3000">
                <Button variant="outline" size="sm">
                  Visit
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Request Access */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Need access?{' '}
            <Link href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Contact your regional administrator
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
