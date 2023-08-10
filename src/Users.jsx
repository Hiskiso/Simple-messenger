import {
  Header,
  Group,
  SimpleCell,
  FormLayout,
  FormItem,
  Input
} from '@vkontakte/vkui';

export default function Users({savedUsers, goToMessenger}) {

  console.log(savedUsers)
  
  function saveUser(e) {
    e.preventDefault()
  
    if(savedUsers == null){
      savedUsers = []
    }

    savedUsers.push([e.target[0].value, e.target[1].value])
    localStorage.setItem("users", JSON.stringify(savedUsers))
    location.reload()

  }

  return (
    <Group>
      {
        savedUsers != null ? 
        savedUsers.map((element, i) => {
          
          return <SimpleCell key={i} onClick={()=>{goToMessenger(element)}} subtitle={element[0]}>{element[1]}</SimpleCell>

        }): ""
   
      }
       <FormLayout onSubmit={saveUser}>
         <FormItem top="Авторизация">
        <Input type="text"/>
       
      </FormItem>
      <FormItem top="Имя">
        <Input type="text"/>
       
      </FormItem>
      
    </FormLayout>
    </Group>
  )
}
