import './catalog-menu.scss'


const CatalogMenu = () => {
    return(
        <ul className='catalog-menu'>
            <li>
                <a href='/'>Решетки</a>
                <div className='subsection__catalog-menu'>
                    <a className='subsection-link__catalog-menu' href='/'>Одностворчатые</a>
                    <a className='subsection-link__catalog-menu' href='/'>Двухстворчатые</a>
                </div>
            </li>
            <li>
                <a href='/'>Защита кондиционера</a>
                <div className='subsection__catalog-menu'>
                    <a className='subsection-link__catalog-menu' href='/'>Козырьки</a>
                    <a className='subsection-link__catalog-menu' href='/'>Корзины</a>
                </div>
            </li>
            <li>
                <a href='/'>Противоугонные устройства</a>
            </li>
            <li>
                <a href='/'>Дровницы</a>
            </li>
            <li>
                <a href='/'>Кормушки для птиц</a>
            </li>
        </ul>
    )
}

export default CatalogMenu;