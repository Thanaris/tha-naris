const IMGS = [
  '/insp-1.jpg','/insp-2.jpg','/insp-3.jpg','/insp-4.jpg','/insp-5.jpg','/insp-6.jpg'
];

export default function InspirationGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {IMGS.map((src, i)=>(
        <div key={i} className="relative rounded-xl overflow-hidden">
          <div className="w-full" style={{paddingTop:'75%'}} />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300" />
          <img src={src} alt={`Ispirazione ${i+1}`} className="absolute inset-0 w-full h-full object-cover" onError={(e)=>{(e.target as HTMLImageElement).style.display='none';}}/>
        </div>
      ))}
    </div>
  );
}
