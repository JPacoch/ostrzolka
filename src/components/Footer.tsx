export default function Footer() {
    return (
        <footer className="bg-white border-t border-neutral-100 py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                <div className="md:col-span-2">
                    <h2 className="font-serif text-3xl tracking-tight text-[#1a1a1a] mb-6">
                        Ostrzółka.
                    </h2>
                    <p className="text-sm text-neutral-500 max-w-sm leading-relaxed mb-8">
                        Wirtualne archiwum bydgoskiej historii.
                    </p>
                </div>

                {/* <div>
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-[#1a1a1a] mb-6">Index</h3>
                    <ul className="space-y-4 text-sm text-neutral-500 flex flex-col items-start">
                        <li><a href="#about" className="hover:text-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all">Mission</a></li>
                        <li><a href="#archive" className="hover:text-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all">Preview</a></li>
                        <li><a href="#crowdfunding" className="hover:text-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all">Support</a></li>
                    </ul>
                </div> */}

                {/* <div>
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-[#1a1a1a] mb-6">Newsletter</h3>
                    <p className="text-xs text-neutral-400 mb-4">Receive updates on our digitization progress.</p>
                    <form className="flex gap-2 relative">
                        <input type="email" placeholder="Email address" className="bg-neutral-50 w-full px-4 py-3 rounded-full text-sm outline-none border border-neutral-200 focus:border-neutral-400 transition-colors" />
                        <button type="submit" className="absolute right-1 top-1 bottom-1 bg-[#1a1a1a] text-white px-4 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors">
                            Join
                        </button>
                    </form>
                </div> */}

            </div>

            <div className="max-w-7xl mx-auto border-t border-neutral-100 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 gap-4">
                <p>&copy; {new Date().getFullYear()} Ostrzółka. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-black transition-colors">Instagram</a>
                    <a href="#" className="hover:text-black transition-colors">Facebook</a>
                    <a href="#" className="hover:text-black transition-colors">Kontakt</a>
                </div>
            </div>
        </footer>
    );
}
