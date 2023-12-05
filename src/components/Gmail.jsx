import { MdOutlineContentCopy } from 'react-icons/md';
// eslint-disable-next-line react/prop-types
const Gmail = ({handleCopyClick}) => {


    return (
        <>
            <button className="relative btn w-full h-full" onClick={handleCopyClick}>
                <img
                    src="https://res.cloudinary.com/dzemdgvqo/image/upload/v1701499765/gqy0oyactyw6ovktvd45.png"
                    alt="Imagen de Gmail"
                    width="90"
                    height="90"
                    style={{ fill: '#0092E4' }}
                />
                <div className="absolute top-0 right-0 p-2 cursor-pointer">
                    <MdOutlineContentCopy className='text-2xl m-4' />
                </div>
                <p className="text-center mt-4">
                    <span style={{ color: 'blue' }}>bruno</span>
                    <span style={{ color: 'maroon' }}>brodon</span>
                    <span style={{ color: 'red' }}>75</span>
                    <span style={{ color: 'orange' }}>@gmail</span>
                    <span style={{ color: 'green' }}>.com</span>
                </p>
            </button>

        </>
    )
}

export default Gmail;
