import React from 'react';
import { useFetch } from 'react-async';

type Props = {
    filename: string;
};

const h1 = (h1Line: string) => <h1>{h1Line}</h1>;
const h2 = (h2Line: string) => <h2>{h2Line}</h2>;
const h3 = (h3Line: string) => <h3>{h3Line}</h3>;
const p = (pLine: string) => <p>{pLine}</p>;

function renderMarkdown(file: string[]) {
    const out: React.ReactNode[] = [];

    for (const rawLine of file) {
        // const line = preProcessLine(rawLine);
        const line = rawLine;

        if (line.startsWith('###')) {
            out.push(h3(line.substring(3)));
        } else if (line.startsWith('##')) {
            out.push(h2(line.substring(2)));
        } else if (line.startsWith('#')) {
            out.push(h1(line.substring(1)));
        } else {
            if (line.length > 0) {
                out.push(p(line));
            }
        }
    }

    return out;
}

// function preProcessLine(line: string): string {
//     const items = line.split(' ');
//     const out: string[] = [];

//     for (const [index, item] of Object.entries(items)) {
//         if (item.startsWith('*') && item.endsWith('*')) {
//             out.push(item.substring(1, item.length - 1));
//         }
//     }
// }

export function MarkdownRenderer(props: Props) {
    const { data, error } = useFetch('/articles/test.md', {});

    console.log(data);

    return (
        <>
            {error ? (
                <>
                    <p>{error.message}</p>
                    <p>{error.stack}</p>
                </>
            ) : (
                <div>
                    {!!data
                        ? JSON.stringify(data)
                        : renderMarkdown([
                              '# Header',
                              '## H2 Time',
                              '### Lil Cheeky H3 for Me',
                              'Body text here',
                          ])}
                </div>
            )}
        </>
    );
}
