import Link from "next/link";

export default function Home() {
  const products = [
    { id: 1, name: "Ted Baker Hoodie", price: "$85.00", image: "https://imagescdn.thecollective.in/img/app/product/1/1197083-25182287.jpg?asp=true&crop=375" },
    { id: 2, name: "Pink Tee", price: "$45.00", image: "https://www.victoriassecret.in/on/demandware.static/-/Sites-vs_master_catalog/default/dwfb135ceb/large/112725227B4P_OM_F.jpg" },
    { id: 3, name: "Motif Pants", price: "$120.00", image: "https://imagescdn.thecollective.in/img/app/product/1/1095434-18268146.jpg?asp=true&crop=375" },
    { id: 4, name: "Ralph Lauren Vest", price: "$95.00", image: "https://imagescdn.thecollective.in/img/app/product/1/1087727-17054157.jpg?asp=true&crop=375" },

    { id: 5, name: "Polka Dot Blouse", price: "$65.00", image: "https://image.hm.com/assets/hm/1d/5e/1d5eef379498197666938b5b8c26a0b1d59ba78b.jpg?imwidth=2160" },
    { id: 6, name: "Floral Shirt", price: "$150.00", image: "https://image.hm.com/assets/hm/c1/4b/c14b7c15ab33b7619d7a2ec45457ad0358c83806.jpg?imwidth=2160" },
    { id: 7, name: "Ruffled Blouse", price: "$80.00", image: "https://image.hm.com/assets/hm/7c/34/7c34188568d9009597416c5431f4a5fdb95dec54.jpg?imwidth=2160" },
    { id: 8, name: "Ivory Cardigan", price: "$35.00", image: "https://imagescdn.thecollective.in/img/app/product/1/1194334-25131295.jpg?asp=true&crop=375" },
  ];

  return (
    <div className="bg-[#FFEBEC] min-h-screen p-8" style={{ fontFamily: '"Century Gothic", AppleGothic, sans-serif' }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[#6A243E] mb-8">Latest Drops</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
     
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 border-2 border-[#DA627D] lg:aspect-none group-hover:opacity-80 lg:h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black / Cotton</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}