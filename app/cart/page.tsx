import Link from "next/link";

export default function Cart() {
  const list = [
    { id: 1, name: "Ted Baker Hoodie", price: 85, img: "https://imagescdn.thecollective.in/img/app/product/1/1197083-25182287.jpg?asp=true&crop=375" },
    { id: 3, name: "Motif Pants", price: 120, img: "https://imagescdn.thecollective.in/img/app/product/1/1095434-18268146.jpg?asp=true&crop=375" },
  ];

  const tot = list.reduce((acc, obj) => acc + obj.price, 0);

  return (
    <div className="bg-[#FFEBEC] min-h-screen p-8" style={{ fontFamily: '"Century Gothic", AppleGothic, sans-serif' }}>
      
      <nav className="flex justify-between max-w-4xl mx-auto px-4 mb-12">
        <Link href="/" className="group p-2">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 group-hover:text-black transition-colors">
            ← Continue Shopping
          </span>
        </Link>
        <div className="p-2">
           <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black">
            Cart ({list.length})
          </span>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl bg-white p-8 rounded-sm shadow-sm">
        <h2 className="text-xl font-bold tracking-widest uppercase mb-8 border-b pb-4 text-[#6A243E]">Your Bag</h2>

        <div className="space-y-8">
          {list.map((obj) => (
            <div key={obj.id} className="flex items-center gap-6">
          
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                <img
                  src={obj.img}
                  alt={obj.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3 className="uppercase tracking-wide text-sm font-bold text-[#450920]">{obj.name}</h3>
                    <p className="ml-4">${obj.price}.00</p>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 italic">Size: M</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="text-gray-500">Qty 1</p>
                  <button type="button" className="text-[10px] font-bold uppercase tracking-widest text-red-400 hover:text-red-600">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#6A243E]">Subtotal</p>
            <p>${tot}.00</p>
          </div>
          <p className="mt-0.5 text-xs text-gray-500 mb-6">Shipping and taxes calculated at checkout.</p>
          
          <button className="w-full bg-[#450920] text-white py-4 text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#DA627D] transition-all">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}