import React, {useState} from 'react'

const Search = ({getQuery}) => {

        const [text, setText] = useState('')

        const onChange = (q) => {
            setText(q)
            getQuery(q)
        }

  return (
    <section>
        <form className = 'search'>
            <input
                type='text'
                placeholder = 'search characters'
                value = {text}
                onChange = {(e) => onChange(e.target.value)}
                autoFocus
            />
        </form>
    </section>
  )
}

export default Search