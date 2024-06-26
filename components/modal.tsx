import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io"

interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    description: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onChange,
    title,
    description,
    children
}) => {
    return (
        <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
                <Dialog.Content className="fixed drop-shadow-md border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] rounded-md bg-neutral-800 p-6 focus:outline-none translate-x-[-50%] translate-y-[-50%]">
                    <Dialog.Title className="text-2xl text-center font-bold mb-4">{title}</Dialog.Title>
                    <Dialog.Description className="mb-5 text-md text-center">{description}</Dialog.Description>
                    <div>{children}</div>
                    <Dialog.Close>
                        <button className="text-neutral-400 hover:text-white absolute top-3 right-3 h-6 w-6 rounded-full appearance-none">
                            <IoMdClose />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
 
export default Modal;