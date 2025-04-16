import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm as useFormspree } from '@formspree/react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { toast } from 'sonner'
import confetti from 'canvas-confetti'
import { Calculator, Home, Building2, Send, MessageSquare, CheckCircle2, AlertCircle, Sparkles, Info, Ruler, FileText, Palette, PenTool as Tool, Brush } from 'lucide-react'

type ServiceType = 'design' | 'interior' | 'construction'
type DesignService = 'architectural' | 'structural' | 'peb' | 'estimation'
type InteriorService = 'interior-design' | 'interior-work'
type InteriorFinishType = 'economy' | 'medium' | 'premium'
type FloorCount = '1' | '2' | '3' | '3+'
type ConstructionType = 'economy' | 'medium' | 'premium'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address').min(1, 'Email is required'),
  phone: z.string()
    .regex(/^\+91[1-9]\d{9}$/, 'Phone number must start with +91 followed by 10 digits')
    .min(1, 'Phone number is required')
})

interface PricingState {
  serviceType: ServiceType
  squareFootage: number
  selectedDesignServices: DesignService[]
  interiorService?: 'interior-design' | 'interior-work'
  interiorFinishType?: InteriorFinishType
  floorCount?: FloorCount
  constructionType?: ConstructionType
}

const RATES = {
  design: {
    architectural: 6,
    structural: 6,
    peb: {
      base: 10000,
      rate: 4
    },
    estimation: {
      base: 5000,
      rate: 2
    }
  },
  interior: {
    design: 35,
    work: {
      economy: 650,
      medium: 850,
      premium: 1000
    }
  },
  construction: {
    economy: 1650,
    medium: 1850,
    premium: 2100
  }
}

const FEATURES = {
  design: {
    architectural: [
      'Elevation Drawing',
      'Layout Drawing',
      'Furniture Layout',
      'Drawing',
      'Plot planning'
    ],
    structural: [
      'Foundation Design',
      'Plinth Design',
      'Column Design',
      'Beam Design',
      'Roof Design'
    ],
    peb: [
      'Electrical Point Design',
      'Electrical Layout',
      'Plumbing Planning and Layout'
    ],
    estimation: [
      'Detailed Estimate',
      'BOQ (Bill of Quantities)'
    ]
  },
  interior: {
    design: [
      'Interior 3D layout',
      'Interior 3D elevation',
      'Interior virtual view'
    ],
    work: {
      economy: [
        '0.8 to 1mm lamination',
        'EVAS, Doorset, Doorito',
        'Slim-line fittings',
        'Non hydraulic',
        'Water Resistance BWR (Century, Saburi, Beloria, Austin)'
      ],
      medium: [
        'PVC Lamination Finish',
        'Godrej, Doorset, Ebco',
        'Godrej fitting, Ebco Fitting',
        'Hydraulic',
        'Water Proof BWP (Century Bond, Sabuti Gold, Architect Ply, Austin Gold)'
      ],
      premium: [
        'Acrylic Lamination',
        'Hettick, Hafele, Godrej',
        'Hettick, Hafele, Godrej',
        'Hydraulic',
        'Water Proof Marine ply (Century Club, Architect ply marine, Green Ply marine)'
      ]
    }
  },
  construction: {
    economy: [
      'Construction inclusive of foundation',
      'Jindal 550D',
      'JSW cement/ Ultratech',
      'ISI Electrical gears and wires from Anchor, Cona',
      'Parryware sanitary fittings',
      'Supreme Pipe and water tank',
      'Vermora, AGL, RAK, Nitco Tiles'
    ],
    medium: [
      'Construction inclusive of foundation',
      'Tata 550HD',
      'Ultratech/ACC',
      'ISI Electrical gears and wires from Cona, Greatwhite, Legrand',
      'Parryware sanitary fittings',
      'Supreme Pipe and water tank',
      'Kajaria, AGL, RAK, Nitco Tiles'
    ],
    premium: [
      'Construction inclusive of foundation',
      'Jindal 550D',
      'Ultratech Premium/ACC Premium',
      'ISI Electrical gears and wires from Legrand, Schindler',
      'Jaquar sanitary fittings',
      'Finolex Pipe and water tank',
      'Johnson, Kajaria, Italian, Orientbell'
    ]
  }
}

const formatWhatsAppMessage = (data: {
  name: string,
  email: string,
  phone: string,
  serviceType: ServiceType,
  squareFootage: number,
  selectedDesignServices: DesignService[],
  interiorService?: InteriorService,
  interiorFinishType?: InteriorFinishType,
  floorCount?: FloorCount,
  constructionType?: ConstructionType,
  price: number,
  features: string[]
}) => {
  return `*New Quote Request*\n\n` +
    `*Name:* ${data.name}\n` +
    `*Email:* ${data.email}\n` +
    `*Phone:* ${data.phone}\n\n` +
    `*Service Details:*\n` +
    `Type: ${data.serviceType}\n` +
    `Area: ${data.squareFootage} sq ft\n` +
    (data.serviceType === 'design' ? `Services: ${data.selectedDesignServices.join(', ')}\n` : '') +
    (data.interiorService ? `Interior Service: ${data.interiorService}\n` : '') +
    (data.interiorFinishType ? `Finish Type: ${data.interiorFinishType}\n` : '') +
    (data.floorCount ? `Floors: ${data.floorCount}\n` : '') +
    (data.constructionType ? `Construction Type: ${data.constructionType}\n` : '') +
    `\n*Estimated Price:* ₹${data.price.toLocaleString('en-IN')}\n\n` +
    `*Selected Features:*\n${data.features.map(f => `- ${f}`).join('\n')}`
}

export function PricingCalculator() {
  const [state, setState] = useState<PricingState>({
    serviceType: 'design',
    squareFootage: 1000,
    selectedDesignServices: [],
    interiorService: 'interior-design',
    interiorFinishType: 'economy',
    floorCount: '1',
    constructionType: 'economy'
  })

  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formState, submitForm] = useFormspree("mqapjkdk")

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '+91'
    }
  })

  const calculatePrice = () => {
    const { serviceType, squareFootage, selectedDesignServices, interiorService, interiorFinishType, floorCount, constructionType } = state
    
    switch (serviceType) {
      case 'design':
        return selectedDesignServices.reduce((total, service) => {
          if (service === 'peb') {
            return total + (squareFootage <= 4000 ? RATES.design.peb.base : squareFootage * RATES.design.peb.rate)
          }
          if (service === 'estimation') {
            return total + (squareFootage <= 4000 ? RATES.design.estimation.base : squareFootage * RATES.design.estimation.rate)
          }
          return total + (squareFootage * RATES.design[service])
        }, 0)
      
      case 'interior':
        if (interiorService === 'interior-design') {
          return squareFootage * RATES.interior.design
        }
        if (interiorService === 'interior-work' && interiorFinishType) {
          return squareFootage * RATES.interior.work[interiorFinishType]
        }
        return 0
      
      case 'construction':
        if (constructionType) {
          const floorMultiplier = {
            '1': 1,
            '2': 1.8,
            '3': 2.5,
            '3+': 3
          }[floorCount || '1']
          return squareFootage * RATES.construction[constructionType] * floorMultiplier
        }
        return 0
      
      default:
        return 0
    }
  }

  const getFeatures = () => {
    const { serviceType, selectedDesignServices, interiorService, interiorFinishType, constructionType } = state
    
    switch (serviceType) {
      case 'design':
        return selectedDesignServices.flatMap(service => FEATURES.design[service])
      
      case 'interior':
        if (interiorService === 'interior-design') {
          return FEATURES.interior.design
        }
        if (interiorService === 'interior-work' && interiorFinishType) {
          return FEATURES.interior.work[interiorFinishType]
        }
        return []
      
      case 'construction':
        return constructionType ? FEATURES.construction[constructionType] : []
      
      default:
        return []
    }
  }

  const handleSquareFootageChange = (value: number[]) => {
    setState(prev => ({ ...prev, squareFootage: value[0] }))
    setProgress(prev => Math.min(prev + 25, 75))
  }

  const handleServiceTypeChange = (type: ServiceType) => {
    setState(prev => ({
      ...prev,
      serviceType: type,
      selectedDesignServices: [],
      interiorService: 'interior-design',
      interiorFinishType: 'economy',
      floorCount: '1',
      constructionType: 'economy'
    }))
    setProgress(25)
  }

  const toggleDesignService = (service: DesignService) => {
    setState(prev => ({
      ...prev,
      selectedDesignServices: prev.selectedDesignServices.includes(service)
        ? prev.selectedDesignServices.filter(s => s !== service)
        : [...prev.selectedDesignServices, service]
    }))
    setProgress(prev => Math.min(prev + 25, 75))
  }

  const handleWhatsAppClick = (formData: z.infer<typeof formSchema>) => {
    const price = calculatePrice()
    const features = getFeatures()
    
    const message = formatWhatsAppMessage({
      ...formData,
      ...state,
      price,
      features
    })

    window.open(`https://wa.me/919861819569?text=${encodeURIComponent(message)}`, '_blank')
  }

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    
    try {
      const price = calculatePrice()
      const features = getFeatures()
      
      const submissionData = {
        ...formData,
        serviceType: state.serviceType,
        squareFootage: state.squareFootage,
        selectedServices: state.serviceType === 'design' ? state.selectedDesignServices.join(', ') : '',
        interiorService: state.interiorService,
        interiorFinishType: state.interiorFinishType,
        floorCount: state.floorCount,
        constructionType: state.constructionType,
        estimatedPrice: `₹${price.toLocaleString('en-IN')}`,
        features: features.join(', ')
      }

      const result = await submitForm(submissionData)

      if (result.error) {
        throw new Error('Failed to submit form')
      }

      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#FFA500', '#C0C0C0']
      })

      toast.success('Quote sent successfully! We\'ll get back to you soon.')

      setTimeout(() => {
        setOpen(false)
        reset()
        setState({
          serviceType: 'design',
          squareFootage: 1000,
          selectedDesignServices: [],
          interiorService: 'interior-design',
          interiorFinishType: 'economy',
          floorCount: '1',
          constructionType: 'economy'
        })
        setProgress(0)
      }, 2000)
    } catch (error) {
      toast.error('Failed to send quote. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Button 
        onClick={() => setOpen(true)}
        className="quote-button flex items-center gap-2 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Calculator className="h-4 w-4" />
        Get Instant Quote
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-gradient-to-b from-zinc-50 to-white">
          <div className="mb-6 sticky top-0 bg-gradient-to-b from-zinc-50 to-white pt-2 pb-4 z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-6 w-6 text-amber-500" />
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                Service Cost Calculator
              </h2>
            </div>
            <Progress value={progress} className="h-2 bg-amber-100" />
          </div>

          <div className="space-y-6">
            {/* Service Type Selection */}
            <div>
              <Label className="text-lg font-medium mb-4 block">Select Service Type</Label>
              <RadioGroup 
                value={state.serviceType}
                onValueChange={(value) => handleServiceTypeChange(value as ServiceType)}
                className="grid grid-cols-3 gap-4"
              >
                <div className={`relative flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-all duration-300 ${
                  state.serviceType === 'design' ? 'border-amber-500 bg-amber-50' : 'hover:border-amber-200'
                }`}>
                  <RadioGroupItem value="design" id="design" />
                  <Label htmlFor="design" className="flex items-center cursor-pointer">
                    <Ruler className="h-4 w-4 mr-2 text-amber-500" />
                    Design
                  </Label>
                </div>
                
                <div className={`relative flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-all duration-300 ${
                  state.serviceType === 'interior' ? 'border-amber-500 bg-amber-50' : 'hover:border-amber-200'
                }`}>
                  <RadioGroupItem value="interior" id="interior" />
                  <Label htmlFor="interior" className="flex items-center cursor-pointer">
                    <Brush className="h-4 w-4 mr-2 text-amber-500" />
                    Interior
                  </Label>
                </div>
                
                <div className={`relative flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-all duration-300 ${
                  state.serviceType === 'construction' ? 'border-amber-500 bg-amber-50' : 'hover:border-amber-200'
                }`}>
                  <RadioGroupItem value="construction" id="construction" />
                  <Label htmlFor="construction" className="flex items-center cursor-pointer">
                    <Building2 className="h-4 w-4 mr-2 text-amber-500" />
                    Construction
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Design Services */}
            {state.serviceType === 'design' && (
              <div>
                <Label className="text-lg font-medium mb-4 block">Select Design Services</Label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'architectural', label: 'Architectural Design', icon: Ruler },
                    { id: 'structural', label: 'Structural Design', icon: Building2 },
                    { id: 'peb', label: 'PEB Design', icon: Tool },
                    { id: 'estimation', label: 'Estimation', icon: FileText }
                  ].map(service => (
                    <div
                      key={service.id}
                      className={`flex items-start space-x-2 rounded-lg border p-4 cursor-pointer transition-all duration-300 ${
                        state.selectedDesignServices.includes(service.id as DesignService)
                          ? 'border-amber-500 bg-amber-50'
                          : 'hover:border-amber-200'
                      }`}
                      onClick={() => toggleDesignService(service.id as DesignService)}
                    >
                      <Checkbox
                        checked={state.selectedDesignServices.includes(service.id as DesignService)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <Label className="flex items-center cursor-pointer">
                          <service.icon className="h-4 w-4 mr-2 text-amber-500" />
                          {service.label}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          {service.id === 'peb' || service.id === 'estimation'
                            ? `₹${service.id === 'peb' ? '10,000' : '5,000'} for <4000 sq ft`
                            : `₹${RATES.design[service.id as 'architectural' | 'structural']}/sq ft`
                          }
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interior Services */}
            {state.serviceType === 'interior' && (
              <div className="space-y-6">
                <div>
                  <Label className="text-lg font-medium mb-4 block">Select Interior Service</Label>
                  <RadioGroup 
                    value={state.interiorService}
                    onValueChange={(value) => setState(prev => ({ ...prev, interiorService: value as InteriorService }))}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className={`relative flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-all duration-300 ${
                      state.interiorService === 'interior-design' ? 'border-amber-500 bg-amber-50' : 'hover:border-amber-200'
                    }`}>
                      <RadioGroupItem value="interior-design" id="interior-design" />
                      <Label htmlFor="interior-design" className="cursor-pointer">
                        <div className="font-medium flex items-center">
                          <Palette className="h-4 w-4 mr-2 text-amber-500" />
                          Interior Design
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">₹35/sq ft</div>
                      </Label>
                    </div>
                    
                    <div className={`relative flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-all duration-300 ${
                      state.interiorService === 'interior-work' ? 'border-amber-500 bg-amber-50' : 'hover:border-amber-200'
                    }`}>
                      <RadioGroupItem value="interior-work" id="interior-work" />
                      <Label htmlFor="interior-work" className="cursor-pointer">
                        <div className="font-medium flex items-center">
                          <Tool className="h-4 w-4 mr-2 text-amber-500" />
                          Interior Work
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">Starting from ₹650/sq ft</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {state.interiorService === 'interior-work' && (
                  <div>
                    <Label className="text-lg font-medium mb-4 block">Select Finish Type</Label>
                    <RadioGroup 
                      value={state.interiorFinishType}
                      onValueChange={(value) => setState(prev => ({ ...prev, interiorFinishType: value as InteriorFinishType }))}
                      className="space-y-4"
                    >
                      {[
                        {
                          value: 'economy',
                          title: 'Economy',
                          description: 'Water Resistance BWR (Century, Saburi, Beloria, Austin)',
                          price: '650'
                        },
                        {
                          value: 'medium',
                          title: 'Medium',
                          description: 'Water Proof BWP (Century, Saburi Gold, Architect Ply, Austin Gold)',
                          price: '850'
                        },
                        {
                          value: 'premium',
                          title: 'Premium',
                          description: 'Water Proof Marine ply (Century Club, Architect ply, Green Ply)',
                          price: '1,000'
                        }
                      ].map((type) => (
                        <div
                          key={type.value}
                          className={`relative flex items-start space-x-2 rounded-lg border p-4 cursor-pointer transition-all duration-300 ${
                            state.interiorFinishType === type.value ? 'border-amber-500 bg-amber-50' : 'hover:border-amber-200'
                          }`}
                        >
                          <RadioGroupItem value={type.value} id={type.value} className="mt-1" />
                          <Label htmlFor={type.value} className="cursor-pointer flex-1">
                            <div className="font-medium">{type.title}</div>
                            <div className="text-sm text-muted-foreground mt-1">{type.description}</div>
                            <div className="text-sm font-medium text-amber-600 mt-1">₹{type.price}/sq ft</div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}
              </div>
            )}

            {/* Construction Options */}
            {state.serviceType === 'construction' && (
              <div className="space-y-6">
                <div>
                  <Label className="text-lg font-medium mb-4 block">Number of Floors</Label>
                  <RadioGroup 
                    value={state.floorCount}
                    onValueChange={(value) => setState(prev => ({ ...prev, floorCount: value as FloorCount }))}
                    className="grid grid-cols-4 gap-4"
                  >
                    {['1', '2', '3', '3+'].map((count) => (
                      <div
                        key={count}
                        className={`relative flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-all duration-300 ${
                          state.floorCount === count ? 'border-amber-500 bg-amber-50' : 'hover:border-amber-200'
                        }`}
                      >
                        <RadioGroupItem value={count} id={`floor-${count}`} />
                        <Label htmlFor={`floor-${count}`} className="cursor-pointer">
                          {count} {count === '1' ? 'Floor' : 'Floors'}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-lg font-medium mb-4 block">Construction Type</Label>
                  <RadioGroup 
                    value={state.constructionType}
                    onValueChange={(value) => setState(prev => ({ ...prev, constructionType: value as ConstructionType }))}
                    className="space-y-4"
                  >
                    {[
                      {
                        value: 'economy',
                        title: 'Economy',
                        price: '1,650'
                      },
                      {
                        value: 'medium',
                        title: 'Medium',
                        price: '1,850'
                      },
                      {
                        value: 'premium',
                        title: 'Premium',
                        price: '2,100'
                      }
                    ].map((type) => (
                      <div
                        key={type.value}
                        className={`relative flex items-start space-x-2 rounded-lg border p-4 cursor-pointer transition-all duration-300 ${
                          state.constructionType === type.value ? 'border-amber-500 bg-amber-50' : 'hover:border-amber-200'
                        }`}
                      >
                        <RadioGroupItem value={type.value} id={type.value} className="mt-1" />
                        <Label htmlFor={type.value} className="cursor-pointer flex-1">
                          <div className="font-medium">{type.title}</div>
                          <div className="text-sm font-medium text-amber-600 mt-1">₹{type.price}/sq ft</div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Square Footage Slider */}
            <div>
              <Label className="text-lg font-medium">Built-up Area: {state.squareFootage} sq ft</Label>
              <Slider
                value={[state.squareFootage]}
                onValueChange={(value) => handleSquareFootageChange(value)}
                min={500}
                max={10000}
                step={100}
                className="mt-2"
              />
            </div>

            {/* Features List */}
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-medium mb-3">Included Features:</h3>
              <ul className="space-y-2">
                {getFeatures().map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Display */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 rounded-lg text-white">
              <p className="text-sm opacity-90 mb-2">Estimated Investment:</p>
              <p className="text-4xl font-bold">
                ₹{calculatePrice().toLocaleString('en-IN')}
              </p>
              {state.serviceType === 'design' && state.selectedDesignServices.length > 1 && (
                <p className="text-sm mt-2 opacity-90">
                  Combined price for {state.selectedDesignServices.length} services
                  <br /><i>Terms and conditions apply. Final pricing may vary during in-person estimate & as per requirements. GST extra</i>
                </p>
              )}
              {state.serviceType === 'construction' && (
                <p className="text-sm mt-2 opacity-90">
                  Price adjusted for {state.floorCount} floor{state.floorCount === '1' ? '' : 's'}
                  <br /><i>Terms and conditions apply. Final pricing may vary during in-person estimate & as per requirements. GST extra</i>
                </p>
              )}
              {(state.serviceType !== 'design' || state.selectedDesignServices.length <= 1) && 
               state.serviceType !== 'construction' && (
                <p className="text-sm mt-2 opacity-90">
                  <i>Terms and conditions apply. Final pricing may vary during in-person estimate & as per requirements. GST extra</i>
                </p>
              )}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    {errors.name && (
                      <span className="text-sm text-red-500">{errors.name.message}</span>
                    )}
                  </div>
                  <Input
                    id="name"
                    {...register('name')}
                    className={`border-amber-200 focus:border-amber-400 focus:ring-amber-400 ${
                      errors.name ? 'border-red-300 focus:border-red-400 focus:ring-red-400' : ''
                    }`}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    {errors.phone && (
                      <span className="text-sm text-red-500">{errors.phone.message}</span>
                    )}
                  </div>
                  <Input
                    id="phone"
                    {...register('phone')}
                    className={`border-amber-200 focus:border-amber-400 focus:ring-amber-400 ${
                      errors.phone ? 'border-red-300 focus:border-red-400 focus:ring-red-400' : ''
                    }`}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  {errors.email && (
                    <span className="text-sm text-red-500">{errors.email.message}</span>
                  )}
                </div>
                <Input
                  id="email"
                  {...register('email')}
                  className={`border-amber-200 focus:border-amber-400 focus:ring-amber-400 ${
                    errors.email ? 'border-red-300 focus:border-red-400 focus:ring-red-400' : ''
                  }`}
                />
              </div>

              <div className="flex gap-3">
                <Button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Get Quote'}
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    const formData = {
                      name: (document.getElementById('name') as HTMLInputElement)?.value || '',
                      email: (document.getElementById('email') as HTMLInputElement)?.value || '',
                      phone: (document.getElementById('phone') as HTMLInputElement)?.value || ''
                    }
                    handleWhatsAppClick(formData as z.infer<typeof formSchema>)
                  }}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  disabled={isSubmitting}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}