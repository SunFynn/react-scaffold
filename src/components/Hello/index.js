import React from 'react';
import HelloStyle from "./style.module.less"

export default function Hello() {
  return (
    <div className={HelloStyle.hello}>
       Hello World组件
    </div>
  )
}
