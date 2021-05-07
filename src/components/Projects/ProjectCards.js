import React from 'react';
import github from '../../icons/github';

const ProjectCards = (props) => {
    const { name, url, repo, img, tags } = props;
    const { tag1, tag2, tag3 } = tags;
    return (
        <div className="bg-3-hex mb-3 container max-w-lg" key={name}>
            <h3 className="h-12 min-h-0 flex con justify-center items-center">{name}</h3>
            {img && <img src={img} alt={name} />}
            <div className="flex justify-around items-center space-x-5">
                <a href={url} target="_blank" rel="noreferrer" className="col-4-hex">
                    Visit
                </a>
                <a href={repo} target="_blank" rel="noreferrer">
                    {github}
                </a>
            </div>
            <div className="tags">
                {tag1 && <p>{tag1}</p>}
                {tag2 && <p>{tag2}</p>}
                {tag3 && <p>{tag3}</p>}
            </div>
        </div>
    );
};

export default ProjectCards;
