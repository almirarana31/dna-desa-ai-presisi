'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  BarChart3,
  Brain,
  Map,
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Users,
  Building2,
  Leaf,
  Target,
} from 'lucide-react'

export default function LandingPage() {
  const features = [
    {
      icon: Brain,
      title: 'Smart Analysis',
      description: 'Get insights about village development using smart technology',
      color: 'text-purple-600',
      bg: 'bg-purple-100 dark:bg-purple-900/30',
    },
    {
      icon: Map,
      title: 'Interactive Maps',
      description: 'View village data on easy-to-read maps with population and economy info',
      color: 'text-blue-600',
      bg: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      icon: BarChart3,
      title: 'Live Dashboards',
      description: 'See up-to-date charts and graphs to make quick decisions',
      color: 'text-emerald-600',
      bg: 'bg-emerald-100 dark:bg-emerald-900/30',
    },
    {
      icon: Target,
      title: 'Priority Planning',
      description: 'Find which villages need help first and plan your programs',
      color: 'text-orange-600',
      bg: 'bg-orange-100 dark:bg-orange-900/30',
    },
    {
      icon: TrendingUp,
      title: 'Growth Forecasts',
      description: 'Predict how villages will grow and develop in the future',
      color: 'text-pink-600',
      bg: 'bg-pink-100 dark:bg-pink-900/30',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Government-level security to protect all your data',
      color: 'text-cyan-600',
      bg: 'bg-cyan-100 dark:bg-cyan-900/30',
    },
  ]

  const stats = [
    { label: 'Villages Analyzed', value: '12,450', icon: Building2 },
    { label: 'Government Users', value: '3,200', icon: Users },
    { label: 'Data Points', value: '2.5M+', icon: BarChart3 },
    { label: 'Accuracy Rate', value: '94%', icon: Target },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 px-4 py-1">
            <Brain className="h-3 w-3 mr-1" />
            AI-Powered Village Analytics
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              DNA Desa AI Presisi
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Smart village development tools for government officials. 
            Make better decisions with clear data and helpful insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/login">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8">
                Access Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="http://localhost:3000/landing">
              <Button size="lg" variant="outline" className="px-8">
                <Leaf className="mr-2 h-4 w-4" />
                Koperasi Platform
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Village Information</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Easy-to-use tools made specifically for Indonesian village development programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built for Government Officials</h2>
            <p className="text-muted-foreground">Trusted by regional development agencies across Indonesia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">For Regional Planning</h3>
              {[
                'Find villages that need help and support',
                'Track development goals across all your villages',
                'Plan budgets based on real data and priorities',
                'See how well your programs are working',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-1 bg-purple-100 dark:bg-purple-900/30 rounded-full mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                  </div>
                  <p className="text-sm">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">For Village Heads</h3>
              {[
                'Compare your village with nearby villages',
                'Get smart suggestions for what to improve first',
                'Create reports easily for government requirements',
                'Track how your community is improving over time',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-1 bg-pink-100 dark:bg-pink-900/30 rounded-full mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-pink-600" />
                  </div>
                  <p className="text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Improve Village Development with Smart Tools</h2>
          <p className="text-purple-50 mb-8 max-w-2xl mx-auto">
            Join government agencies using DNA Desa AI to plan better village development
          </p>
          <Link href="/login">
            <Button size="lg" variant="secondary" className="px-8">
              Request Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">
            © 2026 DNA Desa AI Presisi. Precision Analytics for Village Development.
          </p>
        </div>
      </div>
    </div>
  )
}
