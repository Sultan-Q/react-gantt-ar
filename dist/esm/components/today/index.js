import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Context from "../../context";
import "./index.less";
var Today = function Today() {
  var _useContext = useContext(Context),
    store = _useContext.store,
    prefixCls = _useContext.prefixCls;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-today"),
    style: {
      transform: "translate(".concat(store.todayTranslateX, "px)")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-today_line"),
    style: {
      height: store.bodyScrollHeight
    }
  }));
};
export default observer(Today);