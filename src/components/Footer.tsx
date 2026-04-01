export default function Footer() {
    return (
        <>
            <footer className="bg-gray-700 text-dark py-6 fixed bottom-0 w-full">
               
                {/* Copyright */}
                <div className="text-center text-white mt-1 text-sm">
                    © {new Date().getFullYear()} cyruS. All rights reserved.
                </div>
            </footer>
        </>
    )
}