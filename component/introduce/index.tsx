import { Row, Col, Badge } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IIntroduce } from './IIntroduce';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IIntroduce.Payload;

export const Introduce = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const latestUpdated = DateTime.fromFormat(
    payload.latestUpdated,
    Util.LUXON_DATE_FORMAT.YYYY_LL_DD,
  );

  return (
    <div className="mt-5">
      <Row>
        <Col sm={12} md={3}>
          <h2 style={Style.blue}>INTRODUCE</h2>
        </Col>
        <Col sm={12} md={9}>
          <div className="mt-2">
            <h5>{payload.top1}</h5>
            <p>{payload.content1}</p>
            <h5> {payload.top2}</h5>
            <p>{payload.content2}</p>
            <h5> {payload.top3}</h5>
            <p>{payload.content3}</p>
            <p className="text-right">
              <small>Latest Updated</small>{' '}
              <Badge color="secondary">
                {`${latestUpdated.toFormat(Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD)} `}
              </Badge>
            </p>
            <p className="text-right" style={Style.sign}>
              {payload.sign}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
