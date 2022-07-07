import style from '../../styles/components/darkLayout.module.scss';

export const DarkLayout = ({children}) => {
    return(
        <div className={style['container']}>
        <h3>Dark Layout</h3>
        <div>
            {children}
        </div>
        </div>
    )
}
