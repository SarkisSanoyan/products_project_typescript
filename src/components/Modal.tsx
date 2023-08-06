

interface IModal {
    children: React.ReactNode;
    title: string;
    close: () => void;
}

export function Modal({ children, title, close }: IModal) {

    return (
        <>
            <div className="  bg-black/50 fixed top-0 left-0 right-0 bottom-0" onClick={close}></div>
            <div className="  bg-slate-200 fixed top-1/3 left-1/3 w-[500px] rounded p-5">
                <h2>{title}</h2>
                {children}
            </div>
        </>
    )
}
