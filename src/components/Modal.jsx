import { MdCancel } from 'react-icons/md'
import './modal.scss'

const Modal = ({ open, onClose }) => {
    if (!open) return null
    return (
        <div className="modal">
            <div className="mobile-modal">
            <div onClick={onClose} style={{cursor: 'pointer'}}>
                    <MdCancel style={{position: 'absolute', right: '5px', top: '10px'}} />
                </div>
                <h3>Never miss my newsletter</h3>
                <p>Join 12.1k subscribers. Get weekly newsletter in your inbox</p>
                <div className='modal-form'>
                    <input type="text" placeholder="input email to join newsletter" />
                    <button type="submit" onClick={onClose}>send</button>
                </div>
            </div>
            <div className="desktop-modal">
                <div onClick={onClose} style={{cursor: 'pointer'}}>
                    <MdCancel style={{position: 'absolute', right: '5px', top: '10px'}} />
                </div>
                <h3>Never miss my newsletter</h3>
                <p>Join 12.1k subscribers. Get weekly newsletter in your inbox</p>
                <div className='modal-form'>
                    <input type="text" placeholder="input your email" />
                    <button type="submit" onClick={onClose}>send</button>
                </div>
            </div>
        </div>
    )
}
export default Modal