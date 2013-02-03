<?php
namespace Backend\Direct\Model;
use KJSencha\Annotation as Ext;

class Object extends \Backend\Direct\Entity
{
    public function read($entity, $id)
    {
        if (!$this->checkEntityClassName($entity)) {
            throw new \Exception('Wrong entity class name.');
        }

        $model = $this->getEntityManager()->getRepository($entity)->find($id);
        return $model->toArray();
    }

    public function create($entity, $data)
    {
        // TODO: Implement create() method.
    }

    /**
     * @Ext\Formhandler
     *
     */

    public function update($entity, $id)
    {
        // TODO: Implement update() method.
        return array();
    }

    public function destroy($entity, $id)
    {
        // TODO: Implement destroy() method.
    }
}
