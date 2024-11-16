import { ItemContainer, RepoContainer } from './ItemRepo.styles';

export function ItemRepo({ repo, handleRemoveRepo }) {
    const handleRemove = () => {
        handleRemoveRepo(repo.id);
    };

    return (
        <ItemContainer onClick={handleRemove}>
            <RepoContainer>
                <img src={repo?.owner?.avatar_url} />
                <div>
                    <h3>{repo.name}</h3>
                    <p>{repo.full_name}</p>
                    <a href={repo.html_url} rel='noreferrer' target='_blank'>
                        Ver repositório
                    </a>
                    <br />
                    <a href='#' rel='noreferrer' className='remover'>
                        Remover
                    </a>
                </div>
            </RepoContainer>
            <hr />
        </ItemContainer>
    );
}
