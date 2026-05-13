export default function Layout({ children }) {

    return (
        <div className="h-screen flex bg-black text-white">
            {children}
        </div>
    );
}