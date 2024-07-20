/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sLqVaQMpvz9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function MyComponent() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <img src="/placeholder.svg" alt="Rose Icon" width={32} height={32} className="w-8 h-8" />
          <span className="text-2xl font-bold">Rose Touch Tissue</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            About Us
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Products
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="secondary">Buy Now</Button>
      </header>
      <main className="flex-1">
        <section className="bg-primary py-20 px-6 md:px-12 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Rose Touch Tissue</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Experience the ultimate in softness and quality with our premium tissue products.
          </p>
          <Button variant="secondary" className="mt-4">
            Explore Products
          </Button>
        </section>
        <section id="product" className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Tissue Box"
                width={400}
                height={500}
                className="absolute top-0 left-0 w-full h-full object-contain animate-slide-up"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Introducing Our Premium Tissue Box</h2>
              <p className="text-muted-foreground mb-8">
                Crafted with the finest materials, our tissue box delivers unparalleled softness and strength. Designed
                to elevate your everyday experience.
              </p>
              <Button>Buy Now</Button>
            </div>
          </div>
        </section>
        <section id="about" className="bg-muted py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Rose Touch Tissue</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Story</h3>
                  <p className="text-muted-foreground">
                    Rose Touch Tissue was founded in 2015 with the mission to provide the highest quality tissue
                    products to our customers. Our journey began with a simple idea: to redefine the tissue experience
                    by focusing on softness, strength, and sustainability.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    Our mission is to be the leading provider of premium tissue products that enhance the everyday lives
                    of our customers. We are committed to sourcing the finest materials, implementing eco-friendly
                    practices, and delivering exceptional customer service.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Our Values</h3>
                  <p className="text-muted-foreground">
                    At the heart of Rose Touch Tissue are our core values: quality, innovation, sustainability, and
                    customer satisfaction. These principles guide every decision we make and shape the way we do
                    business.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Tissue Production"
                width={600}
                height={500}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        <section id="products" className="py-20 px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Soft Tissues</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  alt="Soft Tissues"
                  width={400}
                  height={300}
                  className="rounded-md mb-4 object-cover"
                />
                <p className="text-muted-foreground mb-4">
                  Our signature tissue product, offering unparalleled softness and strength.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scented Tissues</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  alt="Scented Tissues"
                  width={400}
                  height={300}
                  className="rounded-md mb-4 object-cover"
                />
                <p className="text-muted-foreground mb-4">
                  Infused with natural fragrances to elevate your everyday experience.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Eco-Friendly Tissues</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  alt="Eco-Friendly Tissues"
                  width={400}
                  height={300}
                  className="rounded-md mb-4 object-cover"
                />
                <p className="text-muted-foreground mb-4">
                  Our sustainable tissue options made from responsibly sourced materials.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="contact" className="bg-muted py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Name" className="w-full" />
              <Input type="email" placeholder="Email" className="w-full" />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full md:col-span-2 bg-background border-input rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button type="submit" className="md:col-span-2">
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/placeholder.svg" alt="Rose Icon" width={24} height={24} className="w-6 h-6" />
          <span>&copy; 2023 Rose Touch Tissue</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <LocateIcon className="w-4 h-4" />
            <span>123 Main Street, Anytown USA</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-4 h-4" />
            <span>+1 (555) 555-5555</span>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon className="w-4 h-4" />
            <span>info@rosetouchtissue.com</span>
          </div>
        </div>
        <nav className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact Us
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Blog
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Join Our Team
          </Link>
        </nav>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:underline" prefetch={false}>
            <FacebookIcon className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            <TwitterIcon className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            <InstagramIcon className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            <LinkedinIcon className="w-5 h-5" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}