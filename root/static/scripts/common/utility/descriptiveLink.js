// This file is part of MusicBrainz, the open internet music database.
// Copyright (C) 2015 MetaBrainz Foundation
// Licensed under the GPL version 2, or (at your option) any later version:
// http://www.gnu.org/licenses/gpl-2.0.txt

import entityLink from './entityLink';
import artistCreditLink from './artistCreditLink';
import areaWithContainmentLink from './areaWithContainmentLink';
import {l} from '../i18n';

export default function descriptiveLink(entity) {
  if (entity.artist_credit) {
    return l('{entity} by {artist}', {
      __react: true,
      entity: entityLink(entity),
      artist: artistCreditLink(entity.artist_credit)
    });
  }

  if (entity.entityType === 'place' && entity.area) {
    return l('{place} in {area}', {
      __react: true,
      place: entityLink(entity),
      area: areaWithContainmentLink(entity.area)
    });
  }

  if (entity.entityType === 'area' && entity.gid) {
    return areaWithContainmentLink(entity);
  }

  return entityLink(entity);
}
