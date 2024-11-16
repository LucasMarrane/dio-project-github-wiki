import { useState } from 'react';
import gitLogo from '../../assets/github.png';

import { Container } from './App.styles';
import { Input } from '../../components/Input/Input.component';
import { Button } from '../../components/Button/Button.component';
import { ItemRepo } from '../../components/ItemRepo/ItemRepo.component';
import { useGetGithubRepository } from '../../services/Api/GitHub/Search/Search.query';
import { toast } from 'react-toastify';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BeatLoader } from 'react-spinners';

export function App() {
    const [currentRepo, setCurrentRepo] = useState('');
    const [removedRepo, setRemovedRepo] = useState<any[]>([]);

    const { data, refetch, isFetching } = useGetGithubRepository({ q: currentRepo });

    const repos = data ? data?.items : [];

    const handleSearchRepo = async () => {
        if (!currentRepo) {
            toast.error('A search text is required.');
            return;
        }
        refetch();
    };

    const handleRemoveRepo = (id) => {
        setRemovedRepo((prev) => [...(prev ?? []), id]);
    };

    const itens = repos.filter(item => !removedRepo.includes(item.id))

    return (
        <Container>
            <img src={gitLogo} width={72} height={72} alt='github logo' />
            
            <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
            <Button onClick={handleSearchRepo} />
            {isFetching ? (
                <BeatLoader color='#ffffff' />
            ) : (
                <>
                    {itens.length > 0 ? (
                        <PerfectScrollbar className='repo__container'>
                            {itens?.map((repo, index) => (
                                <ItemRepo key={`repo-item-${index}`} handleRemoveRepo={handleRemoveRepo} repo={repo} />
                            ))}
                        </PerfectScrollbar>
                    ) : (
                        <>No repo was found</>
                    )}
                </>
            )}
        </Container>
    );
}
