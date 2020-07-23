import React from 'react';
import _ from 'lodash';

import {classNames, Link, withPrefix} from '../utils';

export default class DocsSubmenu extends React.Component {
    render() {
        let child_pages = _.get(this.props, 'child_pages', null);
        let page = _.get(this.props, 'page', null);
        return (
            <ul className="toc-submenu">
              {_.map(child_pages, (child_page, child_page_idx) => (
                <li key={child_page_idx} className={classNames('toc-item', {'current': _.get(page, '__metadata.urlPath', null) === _.get(child_page, '__metadata.urlPath', null)})}>
                  <Link href={withPrefix(_.get(child_page, '__metadata.urlPath', null))}>{_.get(child_page, 'frontmatter.title', null)}</Link>
                </li>
              ))}
            </ul>
        );
    }
}
