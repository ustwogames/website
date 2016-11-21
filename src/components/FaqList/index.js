import React, { PropTypes } from "react"

import styles from "./index.css"

const FaqList = ({ faqs }) => {
  return (
    <ul className={ styles.faq_list }>
      {
        faqs.map((faq, index) => (
          <li key={ index }>
            <p className={ styles.faq_question } dangerouslySetInnerHTML={ {__html: faq.question} } />
            <p className={ styles.faq_answer } dangerouslySetInnerHTML={ {__html: faq.answer} } />
          </li>
        ))
      }
    </ul>
  )
}

FaqList.propTypes = {
  faqs: PropTypes.array.isRequired,
}

export default FaqList
