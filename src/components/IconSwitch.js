export default function IconSwitch({ icon, changeIcon }) {
    const onSelected = (select) => {
        changeIcon(select)
    }
		
	const iconType = {
        list: 'view_list',
        module: 'view_module'
    }
		
	const nameIcon = {
        list: 'module',
        module: 'list',
    }
	  
    return (
	    <div className='material-icons md-52' onClick={() => onSelected(nameIcon[icon])}>{iconType[icon]}
        </div>
    ) 
}