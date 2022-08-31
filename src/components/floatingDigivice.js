import './floatingDigivice.css'

const FloatingDigivice = () => {
    const toggleDigiFilter = () => {
        document.querySelector('.digiFilter').classList.toggle('show')
    }
    return (
        <div onClick={toggleDigiFilter} className='floating-digivice'>
            <img src="/assets/images/digivice1.png" alt='digivice'/>
        </div>
    )
}

export default FloatingDigivice;