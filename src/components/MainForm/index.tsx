import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { Input } from '../Input.tsx';
import { DefaultButton } from '../DefaultButton.tsx/index.tsx';

export function MainForm() {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <Input
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
        <DefaultButton icon={<StopCircleIcon />} color='red' />
      </div>
    </form>
  );
}




