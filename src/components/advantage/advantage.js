 
import production from '../../resources/img/ico/advantage/production.svg'
import painting from '../../resources/img/ico/advantage/painting.svg'
import integrated from '../../resources/img/ico/advantage/integrated.svg'
import designing from '../../resources/img/ico/advantage/designing.svg'
import innovations from '../../resources/img/ico/advantage/innovations.svg'
import orientation from '../../resources/img/ico/advantage/orientation.svg'
import './advantage.scss'


const Advantage = () => {
    return(
        <div className='advantage'>
            <h3>Наши приемущества</h3>
            <ul>
                <li>
                    <img src={production} className='advatage-img' alt='advatage-img'/>
                    <div className='info-advantage'>
                        <h4>Собственное производство</h4>
                        <span> Установка лазерной резки, гильотинные ножницы с ЧПУ, гибочный пресс с ЧПУ и автоматический лентопильный станок позволяют нам обеспечивать безупречное качество и точность всех наших изделий.  </span>
                    </div>
                </li>
                <li>
                    <img src={painting} className='advatage-img' alt='advatage-img'/>
                    <div className='info-advantage'>
                        <h4>Высокотехнологическое порошковое напыление</h4>
                        <span>Благодаря высокой точности и контролю в процессе напыления, мы гарантируем ровное и безупречное покрытие, придавая продуктам эстетическую привлекательность.</span>
                    </div>
                </li>
                <li>
                    <img src={integrated} className='advatage-img' alt='advatage-img'/>
                    <div className='info-advantage'>
                        <h4>Интегрированный процесс  </h4>
                        <span>Мы предлагаем полный комплекс услуг с участием наших опытных специалистов, начиная с проектирования и заканчивая упаковкой готового изделия. </span>
                    </div>
                </li>
                <li>
                    <img src={designing} className='advatage-img' alt='advatage-img'/>
                    <div className='info-advantage'>
                        <h4>Индивидуальный подход к проектированию</h4>
                        <span>Наши проектировщики обладают глубокими знаниями и богатым опытом в области дизайна, что позволяет нам создавать инновационные и функциональные изделия.</span>
                    </div>
                </li>
                <li>
                    <img src={innovations} className='advatage-img' alt='advatage-img'/>
                    <div className='info-advantage'>
                        <h4>Отдел инновационных технических решений</h4>
                        <span>Наш отдел новых технических разработок - это команда высококвалифицированных специалистов, которые занимаются поиском и созданием инновационных технических решений. </span>
                    </div>
                </li>
                <li>
                    <img src={orientation} className='advatage-img' alt='advatage-img'/>
                    <div className='info-advantage'>
                        <h4>Клиентоориентированный подход</h4>
                        <span>Мы стремимся полностью удовлетворить потребности и ожидания наших клиентов, предлагая индивидуальные решения, разработанные специально для них.</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Advantage;