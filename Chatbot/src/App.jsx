import ChatPage from "./pages/ChatPage";
import './App.css'
import Layout from "./layouts/Layout";
import Sidebar from "./components/chat/Sidebar";

// main component
function App() {
    

    return (
        <Layout>
            <Sidebar />
            <ChatPage />
        </Layout>


    );
}


export default App
