import gates from '../../assets/gates.png'
import parker from '../../assets/parker.png'
import manuli from '../../assets/manuli.png'
import continental from '../../assets/continental.png'

const brands = [
  { name: 'Gates', src: gates, className: 'brand-strip__logo brand-strip__logo--gates' },
  { name: 'Parker', src: parker, className: 'brand-strip__logo brand-strip__logo--parker' },
  { name: 'Manuli Hydraulics', src: manuli, className: 'brand-strip__logo brand-strip__logo--manuli' },
  { name: 'Continental', src: continental, className: 'brand-strip__logo brand-strip__logo--continental' },
]

export function BrandStrip() {
  return (
    <section className="brand-strip" aria-label="Marcas parceiras">
      <ul className="brand-strip__list" tabIndex={0} aria-label="Marcas parceiras, navegação horizontal">
        {brands.map((brand) => (
          <li key={brand.name} className="brand-strip__item">
            <img className={brand.className} src={brand.src} alt={brand.name} />
          </li>
        ))}
      </ul>
    </section>
  )
}
