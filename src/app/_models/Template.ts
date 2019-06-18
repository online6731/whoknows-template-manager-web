import { Tag } from './Tag';
import { ObjectId } from './ObjectId';
export class Template {
    _id: ObjectId;
    values?: {};
    idea?: string;
    '&__choose'?: {
        title?: {
            text?: string[]
            audio?: string[]
            video?: string[]
            image?: string[]
        };
        subtitle?: {
            text?: string[]
            audio?: string[]
            video?: string[]
            image?: string[]
        };
        choice?: {
            text?: string[]
            audio?: string[]
            video?: string[]
            image?: string[]
        };
        answer?: {
            text?: string[]
            audio?: string[]
            video?: string[]
            image?: string[]
        };
    };
    '__select'?: {
        title?: {
            text?: string[]
            audio?: string[]
            video?: string[]
            image?: string[]
        }
        subtitle?: {
            text?: string[]
            audio?: string[]
            video?: string[]
            image?: string[]
        }
        choice?: {
            text?: string[]
            audio?: string[]
            video?: string[]
            image?: string[]
        }

        answer?: {
            text?: string[]
            audio?: string[]
            video?: string[]
            image?: string[]
        }
    }
    '&__write'?: {
        title?: {
            text?: string[]
            audio?: string[]
            video?: string[]
            image?: string[]
        }
        subtitle?: {
            text?: string[]
            audio?: string[]
            video?: string[]
            image?: string[]
        }
        choice?: {
            text?: string[]
            audio?: string[]
            video?: string[]
            image?: string[]
        }

        answer?: {
            text?: string[]
            audio?: string[]
            video?: string[]
            image?: string[]
        }
    }
    '&__bool'?: {
        title?: {
            text?: string[];
            audio?: string[];
            video?: string[];
            image?: string[];
        }
        subtitle?: {
            text?: string[];
            audio?: string[];
            video?: string[];
            image?: string[];
        }
        choice?: {
            text?: string[];
            audio?: string[];
            video?: string[];
            image?: string[];
        }

        answer?: {
            text?: string[];
            audio?: string[];
            video?: string[];
            image?: string[];
        }
    }
    tags?: Tag[];
    usage?: string[];
    'score_function'?: string;
    'time_function'?: string;
    '__state'?: string;
    '__test_info'?: {

    }
    '__datasets'?: string[];
    '__last_test'?: {}
}