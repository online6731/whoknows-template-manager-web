import { Tag } from './Tag';

export class Template {
    values				    : {}
    idea                    : String[]
    __choose				: {
        title				: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]
        },
        subtitle			: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]
        },
        choice				: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]
        },
        answer				: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]
        }
    }
    __select				: {
        title				: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]
        },
        subtitle			: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]
        },
        choice				: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]			
        },
        
        answer				: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]			
        }
    }
    __write					: {
        title				: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]			
        },
        subtitle			: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]			
        },
        choice				: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]			
        },
        
        answer				: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]			
        }
    }
    __bool					: {
        title				: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]			
        },
        subtitle			: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]			
        },
        choice				: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]			
        },
        
        answer				: {
            text			: String[],
            audio			: String[],
            video			: String[],
            image			: String[]			
        }
    }
    tags					: Tag[]
    usage					: String[]
    score_function			: {
        type				: String,
    }
    time_function			: {
        type				: String,
    }
    state					: {
        type				: String
    }
    state_info				: String
    datasets				: String[]
}   