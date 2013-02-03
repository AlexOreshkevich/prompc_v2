<?php
namespace Backend\Direct\Model;

class Collection extends \Backend\Direct\Entity
{

    public function read($entity, $params)
    {
        if (!$this->checkEntityClassName($entity)) {
            throw new \Exception('Wrong entity class name.');
        }

        if(!empty($params)) {
            $entities = $this->getEntityManager()->getRepository($entity)->findBy($params);
        } else {
            $entities = $this->getEntityManager()->getRepository($entity)->findAll();
        }

        $result = array();
        foreach ($entities as $entity) {
            $row = $entity->toArray();
            unset($row['category']);

            $result[] = $row;
        }
        return ($result);


    }

    public function create($entity, $data)
    {
        // TODO: Implement create() method.
    }

    public function update($entity, $id)
    {
        // TODO: Implement update() method.
    }

    public function destroy($entity, $id)
    {
        // TODO: Implement destroy() method.
    }

}
