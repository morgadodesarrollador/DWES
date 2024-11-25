import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Gestión de Empresas</h1>
      <Card>
        <CardHeader>
          <CardTitle>Featured Content</CardTitle>
          <CardDescription>Check out our latest updates</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Here's some amazing content that you'll love!</p>
        </CardContent>
        <CardFooter>
          <Button>Learn More</Button>
        </CardFooter>
      </Card>
    </div>
  )
}


