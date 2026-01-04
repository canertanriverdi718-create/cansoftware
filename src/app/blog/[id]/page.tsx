import BlogDetailClient from './BlogDetailClient'

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ]
}

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return <BlogDetailClient id={params.id} />
}
