<?php
namespace Backend\Direct\Model;

class Tree extends \Backend\Direct\Entity
{
    public function read($entity, $id)
    {
        if (!$this->checkEntityClassName($entity)) {
            throw new \Exception('Wrong entity class name.');
        }

        if ($id == 'root') $id = $entity::TREE_ROOT;

        /* @var \Doctrine\ORM\EntityRepository $list */
        $entities = $this->getEntityManager()->getRepository($entity)->findBy(array('parent' => $id));

        $result = array();
        foreach ($entities as $entity) {
            $node = $entity->toArray();
            unset($node['parent']);

            /* Чтобы не отображался "+" у категорий без подкатегорий */
            if (0 == count($entity->getChildren())) {
                $node['children'] = array();
            } else {
                unset($node['children']);
            }
            $result[] = $node;
        }
        return ($result);
    }

    public function update($entity, $id)
    {

    }

    public function create($entity, $data)
    {

    }

    public function destroy($entity, $id)
    {

    }

}
