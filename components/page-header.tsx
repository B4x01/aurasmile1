"use client"

interface PageHeaderProps {
  title: string
  description: string
  backgroundImage?: string
}

export function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <div
      className="page-header py-20 text-center relative"
      style={{
        backgroundColor: "rgb(var(--primary))",
      }}
    >
      <div className="absolute inset-0">
        {/* Background pattern removed as per client request */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--primary))] to-[rgb(var(--primary))]/90"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-200">{description}</p>
      </div>
    </div>
  )
}
