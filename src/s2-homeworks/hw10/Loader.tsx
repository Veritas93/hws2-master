import s from './Loader.module.css'
import image1 from './bll/tube-spinner.svg'


export const Loader = () => <div className={s.loader}>
  <div className={s.loaderItem}>
    <img src={image1} alt="Loading..."/>
  </div>
</div>
