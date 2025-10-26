const Widget = ({ children, className = '' }) => {
  return (
    <div className={`bg-[#363C43] rounded-[19px] shadow-[5px_5px_4px_0px_rgba(0,0,0,0.4)] p-6 ${className}`}>
      {children}
    </div>
  )
}

export default Widget
