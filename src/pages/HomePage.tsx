import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { useProducts } from "../hooks/products";
import { Modal } from "../components/Modal";
import { RegistrationForm } from "../components/RegistrationForm";


export function HomePage() {
    const { products, loading, error, addProduct } = useProducts();
    const { modal, open, close } = useContext(ModalContext);

    return (
        <div className="HomePage max-w-[800px] mx-auto">
            {loading && <span>Loading...</span>}
            {error && <span className=" text-red-800">{error}</span>}

            {
                products.map(product =>
                    <div key={product.id}
                        className=" flex justify-center items-center flex-col shadow-lg p-2 m-2 hover:shadow-2xl">
                        <img src={product.image} className="w-2/5 p-10" />
                        <h2>{product.title}</h2>
                        <div className="price">{product.price}</div>
                        <div className="description">{product.description}</div>
                        <button className=" bg-blue-500 text-white p-1">Details...</button>
                    </div>)
            }

            {modal && <Modal title="Create your product" close={close}>
                <RegistrationForm />
            </Modal>}

            <button className=" bg-blue-900 text-white text-2xl px-4 py-2 fixed bottom-5 right-5 rounded"
                onClick={open}>
                PLUS
            </button>
        </div>
    )
}
