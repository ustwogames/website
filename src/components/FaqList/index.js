import React, { PropTypes } from "react"
import Collapse, { Panel } from "rc-collapse"

import styles from "./index.css"

const FaqList = ({ faqs }) => {
  return (
    <Collapse
        accordion={true}
      >
        {
          faqs.map((faq, index) => (
            <Panel header={ faq.question } key={ index }>
              <p className={ styles.faq_answer } dangerouslySetInnerHTML={ {__html: faq.answer} } />
            </Panel>
          ))
        }
      </Collapse>
  )
}

FaqList.propTypes = {
  faqs: PropTypes.array.isRequired,
}

export default FaqList
