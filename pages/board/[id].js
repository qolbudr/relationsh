import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { useState, useEffect } from 'react'
import { fetchUser, addBoard } from '../../utils/db'
import MiddleCenterContainer from '../../components/middleCenterContainer'
import FormGroup from '../../components/forms/formGroup'
import Input from '../../components/forms/input'
import Button from '../../components/forms/button'
import TextArea from '../../components/forms/textArea'
import Image from 'next/image'
import SideMenuItem from '../../components/sideMenuItem'
import toast, { Toaster } from 'react-hot-toast';

const Board = () => {
  const router = useRouter()
  const { id } = router.query
  const [user, setUser] = useState({})
  const [form, setForm] = useState({})

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleType = (e) => {
    const name = e.target.getAttribute('name');
    const value = e.target.getAttribute('value');

    setForm({
      ...form,
      [name]: value
    })

    console.log(form)
  }

  const tryAdd = async (e) => {
    e.preventDefault()
    if(!form.type) {
      return toast('Choose your mood to ' + user.name, {
        icon: '😠',
      });
    }

    const data = await addBoard(id, form);

    if(data) {
      setForm({name: '', type: '', content: ''})
      return toast('Message has been sent', {
        icon: '😠',
      });
    }

    return false;
  }

  useEffect(() => {
    fetchUser(id, user, setUser)
  }, [])

  return (
    <Layout title={ 'Write to ' + (user.name ?? 'User') + '\'s Board' }>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <MiddleCenterContainer>
        <div className="wrap">
          <div className="flex items-center mb-7">
            <Image className="rounded-full" src={user.photoURL} width="40" height="40"/>
            <h3 className="ml-2 text-xl font-medium">Write to {user.name}</h3>
          </div>
          <form onSubmit={tryAdd}>
            <FormGroup>
              <Input value={form.name} onChange={handleChange} type="text" name="name" placeholder="Your name" label="name-input" required />
            </FormGroup>
            <FormGroup>
              <TextArea value={form.content} onChange={handleChange} rows="7" type="text" name="content" label="message-input" placeholder="Message" required />
            </FormGroup>
            <FormGroup>
              <div className="shadow py-1 px-4 rounded bg-white">
                <ul className="list-unstyled flex justify-between text-3xl lg:text-4xl">
                  <SideMenuItem active={form.type == 'care-mood'} name="type" value="care-mood" onClick={handleType}>😇</SideMenuItem>
                  <SideMenuItem active={form.type == 'angry-mood'} name="type" value="angry-mood" onClick={handleType}>😠</SideMenuItem>
                  <SideMenuItem active={form.type == 'love-mood'} name="type" value="love-mood" onClick={handleType}>😍</SideMenuItem>
                  <SideMenuItem active={form.type == 'no-mood'} name="type" value="no-mood" onClick={handleType}>😶</SideMenuItem>
                </ul>
              </div>
            </FormGroup>
            <FormGroup>
              <Button type="submit">Send</Button>
            </FormGroup>
          </form>
        </div>
      </MiddleCenterContainer>
    </Layout>
  )
}

export default Board