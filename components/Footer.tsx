export function Footer() {
    return (
        <footer className="py-10 border-t border-white/5 text-center text-neutral-600">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <p className="text-xs uppercase tracking-widest"> &copy; {new Date().getFullYear()} Aione Cloud. All Systems Operational.</p>
            </div>
        </footer>
    );
}
