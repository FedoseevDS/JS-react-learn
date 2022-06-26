import React from 'react';
import s from './Dialogs.module.css';

const Dialog = (props) => {
    return (
        <div className={s.dialogs}>
             <div className={s.dialogs_items}>
                <div className={s.dialog + ' ' + s.active}>
                    Антон
                </div>
                <div className={s.dialog}>
                    Павел
                </div>
                <div className={s.dialog}>
                    Саша
                </div>
                <div className={s.dialog}>
                    Света
                </div>
                <div className={s.dialog}>
                    Оля
                </div>
             </div>
             <div className={s.messages}>
                <div className={s.message}>Привет</div>
                <div className={s.message}>Как жизнь молодая?</div>
                <div className={s.message}>У меня тоже все хорошо.</div>
             </div>
        </div>
    )
}

export default Dialog;