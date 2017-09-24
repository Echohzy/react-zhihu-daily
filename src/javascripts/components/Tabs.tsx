import * as React from 'react';

import "../../stylesheets/tabs.scss";

interface TabsProps {
  children: React.ReactNode,
  activeKey: string
}

interface TabItemProps {
  children: React.ReactNode,
  active?: boolean,
  itemKey?:string,
  title?: any
}
export default class Tabs extends React.Component<TabsProps, any> {
  constructor(props: TabsProps){
    super(props);
  }
  renderNav(){
    return React.Children.map(this.props.children, (child: React.ReactElement<any>)=>{
      const {
        itemKey,
        title
      }  = child.props;
      let classname = ['nav-button'];
      itemKey===this.props.activeKey ? classname.push("active"):"";
      return (
        <div className={classname.join(" ")}>
          {title}
        </div>
      );
    })
  }
  renderItem(){
    return React.Children.map(this.props.children, (child: React.ReactElement<any>)=>{
      const {
        itemKey,
        children
      } = child.props;
      return (
        <TabItem active={itemKey===this.props.activeKey} key={itemKey}>
          {children}
        </TabItem>
      );
    })
  }
  render(){
    return (
      <div className="tabs-container">
        <div className="tabs-buttons">
          {this.renderNav()}
        </div>
        <div className="tabs-content">
          {this.renderItem()}
        </div>
      </div>
    );
  }
}

export class TabItem extends React.Component<TabItemProps, any>{
  constructor(props: TabItemProps){
    super(props);
  }
  render(){
    const { active, children } = this.props;
    let classname = ["tabs-item-container"];
    active?classname.push("active"):"";
    return (
      <div className={classname.join(" ")}>
        {children}
      </div>
    );
  }
}