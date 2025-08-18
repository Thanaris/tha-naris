import Link from 'next/link';

export default function CollectionCard({ slug, name, image, size, description }:{
  slug:string; name:string; image?:string; size?:string; description?:string;
}) {
  return (
    <Link href={`/products/${slug}`} className="group block bg-white rounded-xl border overflow-hidden hover:shadow-lg transition">
      <div className="relative w-full" style={{paddingTop:'66%'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300" />
        {image ? <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover" /> : null}
      </div>
      <div className="p-4">
        <h3 className="font-semibold group-hover:text-blue-600">{name}</h3>
        <p className="text-sm text-gray-600">{size || '600×1200 mm'}</p>
        {description ? <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p> : null}
      </div>
    </Link>
  );
}
