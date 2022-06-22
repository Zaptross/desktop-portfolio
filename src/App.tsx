import './App.css';
import FileWindow from './components/FileWindow/FileWindow';
import { MarkdownRenderer } from './components/MarkdownRenderer/MarkdownRenderer';
import pexelsBackgrounds from './assets/pexels-backgrounds.json';
import { randomFrom } from './utils/arrays';
import { Theme } from './utils/themes';
import { useState } from 'react';
import { DesktopIcon } from './components/DesktopIcon/DesktopIcon';

const configureImageLink = ({
    image,
    width,
    height,
}: {
    image: string;
    width: number;
    height: number;
}) => `${image}?auto=compress&cs=tinysrgb&fit=crop&w=${width}&h=${height}`;

function App() {
    const [getTheme, setTheme] = useState<Theme>(Theme.Windows11);

    return (
        <>
            <FileWindow theme={getTheme} title="My File">
                <MarkdownRenderer filename={'test.md'}></MarkdownRenderer>
            </FileWindow>
            <DesktopIcon
                theme={getTheme}
                title={'Notepad'}
                image={
                    'https://blogs.windows.com/wp-content/uploads/prod/sites/44/2021/12/Win-Notepad.png'
                }
                onDoubleClick={() => console.log('Notepad b o i s')}
            />
            <div
                className="App"
                style={{
                    backgroundImage: `url(${configureImageLink({
                        image: randomFrom(pexelsBackgrounds).src.original,
                        width: window.innerWidth,
                        height: window.innerHeight,
                    })})`,
                }}
            >
                <header className="App-header"></header>
            </div>
        </>
    );
}

export default App;
